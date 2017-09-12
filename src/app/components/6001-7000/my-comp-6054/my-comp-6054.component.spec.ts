import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6054Component } from './my-comp-6054.component';

describe('MyComp6054Component', () => {
  let component: MyComp6054Component;
  let fixture: ComponentFixture<MyComp6054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
