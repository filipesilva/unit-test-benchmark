import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6696Component } from './my-comp-6696.component';

describe('MyComp6696Component', () => {
  let component: MyComp6696Component;
  let fixture: ComponentFixture<MyComp6696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
