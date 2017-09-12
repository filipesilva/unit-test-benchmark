import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6105Component } from './my-comp-6105.component';

describe('MyComp6105Component', () => {
  let component: MyComp6105Component;
  let fixture: ComponentFixture<MyComp6105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
