import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9241Component } from './my-comp-9241.component';

describe('MyComp9241Component', () => {
  let component: MyComp9241Component;
  let fixture: ComponentFixture<MyComp9241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
