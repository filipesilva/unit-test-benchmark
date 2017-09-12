import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2984Component } from './my-comp-2984.component';

describe('MyComp2984Component', () => {
  let component: MyComp2984Component;
  let fixture: ComponentFixture<MyComp2984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
