import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2753Component } from './my-comp-2753.component';

describe('MyComp2753Component', () => {
  let component: MyComp2753Component;
  let fixture: ComponentFixture<MyComp2753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
