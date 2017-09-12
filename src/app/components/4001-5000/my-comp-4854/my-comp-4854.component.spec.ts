import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4854Component } from './my-comp-4854.component';

describe('MyComp4854Component', () => {
  let component: MyComp4854Component;
  let fixture: ComponentFixture<MyComp4854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
