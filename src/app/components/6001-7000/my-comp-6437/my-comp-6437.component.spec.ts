import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6437Component } from './my-comp-6437.component';

describe('MyComp6437Component', () => {
  let component: MyComp6437Component;
  let fixture: ComponentFixture<MyComp6437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
