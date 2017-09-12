import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp271Component } from './my-comp-271.component';

describe('MyComp271Component', () => {
  let component: MyComp271Component;
  let fixture: ComponentFixture<MyComp271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
