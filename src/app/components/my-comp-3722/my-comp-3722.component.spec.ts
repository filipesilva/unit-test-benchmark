import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3722Component } from './my-comp-3722.component';

describe('MyComp3722Component', () => {
  let component: MyComp3722Component;
  let fixture: ComponentFixture<MyComp3722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
