import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2823Component } from './my-comp-2823.component';

describe('MyComp2823Component', () => {
  let component: MyComp2823Component;
  let fixture: ComponentFixture<MyComp2823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
