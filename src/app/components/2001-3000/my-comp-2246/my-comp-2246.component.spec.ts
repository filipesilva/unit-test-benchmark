import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2246Component } from './my-comp-2246.component';

describe('MyComp2246Component', () => {
  let component: MyComp2246Component;
  let fixture: ComponentFixture<MyComp2246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
