import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp944Component } from './my-comp-944.component';

describe('MyComp944Component', () => {
  let component: MyComp944Component;
  let fixture: ComponentFixture<MyComp944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
