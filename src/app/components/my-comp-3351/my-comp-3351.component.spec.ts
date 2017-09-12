import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3351Component } from './my-comp-3351.component';

describe('MyComp3351Component', () => {
  let component: MyComp3351Component;
  let fixture: ComponentFixture<MyComp3351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
