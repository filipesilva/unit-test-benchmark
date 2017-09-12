import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6796Component } from './my-comp-6796.component';

describe('MyComp6796Component', () => {
  let component: MyComp6796Component;
  let fixture: ComponentFixture<MyComp6796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
