import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9444Component } from './my-comp-9444.component';

describe('MyComp9444Component', () => {
  let component: MyComp9444Component;
  let fixture: ComponentFixture<MyComp9444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
