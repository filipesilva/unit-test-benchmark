import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6492Component } from './my-comp-6492.component';

describe('MyComp6492Component', () => {
  let component: MyComp6492Component;
  let fixture: ComponentFixture<MyComp6492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
