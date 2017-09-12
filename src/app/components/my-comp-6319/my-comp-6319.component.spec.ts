import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6319Component } from './my-comp-6319.component';

describe('MyComp6319Component', () => {
  let component: MyComp6319Component;
  let fixture: ComponentFixture<MyComp6319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
