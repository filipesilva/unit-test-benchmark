import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2553Component } from './my-comp-2553.component';

describe('MyComp2553Component', () => {
  let component: MyComp2553Component;
  let fixture: ComponentFixture<MyComp2553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
