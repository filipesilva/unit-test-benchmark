import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7506Component } from './my-comp-7506.component';

describe('MyComp7506Component', () => {
  let component: MyComp7506Component;
  let fixture: ComponentFixture<MyComp7506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
