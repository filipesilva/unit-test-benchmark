import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6067Component } from './my-comp-6067.component';

describe('MyComp6067Component', () => {
  let component: MyComp6067Component;
  let fixture: ComponentFixture<MyComp6067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
