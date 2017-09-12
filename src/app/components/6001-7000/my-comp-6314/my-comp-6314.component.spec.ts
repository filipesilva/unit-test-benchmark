import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6314Component } from './my-comp-6314.component';

describe('MyComp6314Component', () => {
  let component: MyComp6314Component;
  let fixture: ComponentFixture<MyComp6314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
