import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2307Component } from './my-comp-2307.component';

describe('MyComp2307Component', () => {
  let component: MyComp2307Component;
  let fixture: ComponentFixture<MyComp2307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
