import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6727Component } from './my-comp-6727.component';

describe('MyComp6727Component', () => {
  let component: MyComp6727Component;
  let fixture: ComponentFixture<MyComp6727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
