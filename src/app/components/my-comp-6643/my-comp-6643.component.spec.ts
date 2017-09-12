import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6643Component } from './my-comp-6643.component';

describe('MyComp6643Component', () => {
  let component: MyComp6643Component;
  let fixture: ComponentFixture<MyComp6643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
