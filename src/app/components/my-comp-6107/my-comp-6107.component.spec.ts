import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6107Component } from './my-comp-6107.component';

describe('MyComp6107Component', () => {
  let component: MyComp6107Component;
  let fixture: ComponentFixture<MyComp6107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
