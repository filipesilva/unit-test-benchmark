import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5566Component } from './my-comp-5566.component';

describe('MyComp5566Component', () => {
  let component: MyComp5566Component;
  let fixture: ComponentFixture<MyComp5566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
