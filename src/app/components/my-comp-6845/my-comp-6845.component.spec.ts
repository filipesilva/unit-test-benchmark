import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6845Component } from './my-comp-6845.component';

describe('MyComp6845Component', () => {
  let component: MyComp6845Component;
  let fixture: ComponentFixture<MyComp6845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
