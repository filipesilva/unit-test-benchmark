import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6466Component } from './my-comp-6466.component';

describe('MyComp6466Component', () => {
  let component: MyComp6466Component;
  let fixture: ComponentFixture<MyComp6466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
