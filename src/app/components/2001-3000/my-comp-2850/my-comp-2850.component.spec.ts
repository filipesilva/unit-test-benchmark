import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2850Component } from './my-comp-2850.component';

describe('MyComp2850Component', () => {
  let component: MyComp2850Component;
  let fixture: ComponentFixture<MyComp2850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
