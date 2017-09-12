import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9985Component } from './my-comp-9985.component';

describe('MyComp9985Component', () => {
  let component: MyComp9985Component;
  let fixture: ComponentFixture<MyComp9985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
