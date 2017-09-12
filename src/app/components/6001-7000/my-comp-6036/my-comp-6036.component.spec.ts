import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6036Component } from './my-comp-6036.component';

describe('MyComp6036Component', () => {
  let component: MyComp6036Component;
  let fixture: ComponentFixture<MyComp6036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
