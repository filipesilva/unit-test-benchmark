import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6256Component } from './my-comp-6256.component';

describe('MyComp6256Component', () => {
  let component: MyComp6256Component;
  let fixture: ComponentFixture<MyComp6256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
