import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4841Component } from './my-comp-4841.component';

describe('MyComp4841Component', () => {
  let component: MyComp4841Component;
  let fixture: ComponentFixture<MyComp4841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
