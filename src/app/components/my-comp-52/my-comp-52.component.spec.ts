import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp52Component } from './my-comp-52.component';

describe('MyComp52Component', () => {
  let component: MyComp52Component;
  let fixture: ComponentFixture<MyComp52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
