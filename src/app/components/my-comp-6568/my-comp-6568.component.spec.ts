import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6568Component } from './my-comp-6568.component';

describe('MyComp6568Component', () => {
  let component: MyComp6568Component;
  let fixture: ComponentFixture<MyComp6568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
