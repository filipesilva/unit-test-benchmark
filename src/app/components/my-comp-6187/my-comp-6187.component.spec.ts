import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6187Component } from './my-comp-6187.component';

describe('MyComp6187Component', () => {
  let component: MyComp6187Component;
  let fixture: ComponentFixture<MyComp6187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
