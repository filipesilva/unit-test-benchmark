import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6974Component } from './my-comp-6974.component';

describe('MyComp6974Component', () => {
  let component: MyComp6974Component;
  let fixture: ComponentFixture<MyComp6974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
