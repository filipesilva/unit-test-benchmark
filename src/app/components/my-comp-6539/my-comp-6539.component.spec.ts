import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6539Component } from './my-comp-6539.component';

describe('MyComp6539Component', () => {
  let component: MyComp6539Component;
  let fixture: ComponentFixture<MyComp6539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
