import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6075Component } from './my-comp-6075.component';

describe('MyComp6075Component', () => {
  let component: MyComp6075Component;
  let fixture: ComponentFixture<MyComp6075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
