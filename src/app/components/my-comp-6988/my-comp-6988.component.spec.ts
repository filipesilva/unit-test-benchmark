import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6988Component } from './my-comp-6988.component';

describe('MyComp6988Component', () => {
  let component: MyComp6988Component;
  let fixture: ComponentFixture<MyComp6988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
