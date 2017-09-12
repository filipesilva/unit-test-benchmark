import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6917Component } from './my-comp-6917.component';

describe('MyComp6917Component', () => {
  let component: MyComp6917Component;
  let fixture: ComponentFixture<MyComp6917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
