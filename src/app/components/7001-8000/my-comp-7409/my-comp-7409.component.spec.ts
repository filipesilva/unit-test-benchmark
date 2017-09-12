import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7409Component } from './my-comp-7409.component';

describe('MyComp7409Component', () => {
  let component: MyComp7409Component;
  let fixture: ComponentFixture<MyComp7409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
