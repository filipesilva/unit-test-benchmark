import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5880Component } from './my-comp-5880.component';

describe('MyComp5880Component', () => {
  let component: MyComp5880Component;
  let fixture: ComponentFixture<MyComp5880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
