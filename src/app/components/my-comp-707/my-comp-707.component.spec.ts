import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp707Component } from './my-comp-707.component';

describe('MyComp707Component', () => {
  let component: MyComp707Component;
  let fixture: ComponentFixture<MyComp707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
