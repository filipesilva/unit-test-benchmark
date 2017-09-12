import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4088Component } from './my-comp-4088.component';

describe('MyComp4088Component', () => {
  let component: MyComp4088Component;
  let fixture: ComponentFixture<MyComp4088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
