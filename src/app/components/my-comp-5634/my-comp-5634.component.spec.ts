import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5634Component } from './my-comp-5634.component';

describe('MyComp5634Component', () => {
  let component: MyComp5634Component;
  let fixture: ComponentFixture<MyComp5634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
