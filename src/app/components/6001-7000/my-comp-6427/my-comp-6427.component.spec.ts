import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6427Component } from './my-comp-6427.component';

describe('MyComp6427Component', () => {
  let component: MyComp6427Component;
  let fixture: ComponentFixture<MyComp6427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
