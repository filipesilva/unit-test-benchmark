import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2039Component } from './my-comp-2039.component';

describe('MyComp2039Component', () => {
  let component: MyComp2039Component;
  let fixture: ComponentFixture<MyComp2039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
