import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6761Component } from './my-comp-6761.component';

describe('MyComp6761Component', () => {
  let component: MyComp6761Component;
  let fixture: ComponentFixture<MyComp6761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
