import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6977Component } from './my-comp-6977.component';

describe('MyComp6977Component', () => {
  let component: MyComp6977Component;
  let fixture: ComponentFixture<MyComp6977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
