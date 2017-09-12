import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3157Component } from './my-comp-3157.component';

describe('MyComp3157Component', () => {
  let component: MyComp3157Component;
  let fixture: ComponentFixture<MyComp3157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
