import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp296Component } from './my-comp-296.component';

describe('MyComp296Component', () => {
  let component: MyComp296Component;
  let fixture: ComponentFixture<MyComp296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
