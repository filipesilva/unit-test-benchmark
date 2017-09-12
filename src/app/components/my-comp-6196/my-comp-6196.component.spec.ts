import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6196Component } from './my-comp-6196.component';

describe('MyComp6196Component', () => {
  let component: MyComp6196Component;
  let fixture: ComponentFixture<MyComp6196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
