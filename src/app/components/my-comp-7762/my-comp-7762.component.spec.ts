import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7762Component } from './my-comp-7762.component';

describe('MyComp7762Component', () => {
  let component: MyComp7762Component;
  let fixture: ComponentFixture<MyComp7762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
