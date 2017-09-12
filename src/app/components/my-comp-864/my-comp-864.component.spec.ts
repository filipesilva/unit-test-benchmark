import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp864Component } from './my-comp-864.component';

describe('MyComp864Component', () => {
  let component: MyComp864Component;
  let fixture: ComponentFixture<MyComp864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
