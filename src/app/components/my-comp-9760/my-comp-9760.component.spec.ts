import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9760Component } from './my-comp-9760.component';

describe('MyComp9760Component', () => {
  let component: MyComp9760Component;
  let fixture: ComponentFixture<MyComp9760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
