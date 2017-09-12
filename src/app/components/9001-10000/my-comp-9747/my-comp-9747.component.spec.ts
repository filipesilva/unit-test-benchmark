import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9747Component } from './my-comp-9747.component';

describe('MyComp9747Component', () => {
  let component: MyComp9747Component;
  let fixture: ComponentFixture<MyComp9747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
