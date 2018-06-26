import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlretDetailComponent } from './alret-detail.component';

describe('AlretDetailComponent', () => {
  let component: AlretDetailComponent;
  let fixture: ComponentFixture<AlretDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlretDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlretDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
