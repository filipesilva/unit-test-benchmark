import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp743Component } from './my-comp-743.component';

describe('MyComp743Component', () => {
  let component: MyComp743Component;
  let fixture: ComponentFixture<MyComp743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
