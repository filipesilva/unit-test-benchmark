import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3233Component } from './my-comp-3233.component';

describe('MyComp3233Component', () => {
  let component: MyComp3233Component;
  let fixture: ComponentFixture<MyComp3233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
