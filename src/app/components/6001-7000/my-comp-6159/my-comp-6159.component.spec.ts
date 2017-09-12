import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6159Component } from './my-comp-6159.component';

describe('MyComp6159Component', () => {
  let component: MyComp6159Component;
  let fixture: ComponentFixture<MyComp6159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
