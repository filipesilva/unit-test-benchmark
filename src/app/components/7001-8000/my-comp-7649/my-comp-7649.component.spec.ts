import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7649Component } from './my-comp-7649.component';

describe('MyComp7649Component', () => {
  let component: MyComp7649Component;
  let fixture: ComponentFixture<MyComp7649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
