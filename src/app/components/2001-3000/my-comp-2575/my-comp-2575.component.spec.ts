import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2575Component } from './my-comp-2575.component';

describe('MyComp2575Component', () => {
  let component: MyComp2575Component;
  let fixture: ComponentFixture<MyComp2575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
