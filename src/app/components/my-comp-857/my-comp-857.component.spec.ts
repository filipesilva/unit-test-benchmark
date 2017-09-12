import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp857Component } from './my-comp-857.component';

describe('MyComp857Component', () => {
  let component: MyComp857Component;
  let fixture: ComponentFixture<MyComp857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
