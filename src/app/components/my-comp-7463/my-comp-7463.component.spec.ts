import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7463Component } from './my-comp-7463.component';

describe('MyComp7463Component', () => {
  let component: MyComp7463Component;
  let fixture: ComponentFixture<MyComp7463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
