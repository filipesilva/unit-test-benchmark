import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6090Component } from './my-comp-6090.component';

describe('MyComp6090Component', () => {
  let component: MyComp6090Component;
  let fixture: ComponentFixture<MyComp6090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
