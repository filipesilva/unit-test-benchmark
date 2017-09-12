import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6173Component } from './my-comp-6173.component';

describe('MyComp6173Component', () => {
  let component: MyComp6173Component;
  let fixture: ComponentFixture<MyComp6173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
