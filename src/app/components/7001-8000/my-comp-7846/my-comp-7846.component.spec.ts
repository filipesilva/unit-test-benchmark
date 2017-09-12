import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7846Component } from './my-comp-7846.component';

describe('MyComp7846Component', () => {
  let component: MyComp7846Component;
  let fixture: ComponentFixture<MyComp7846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
