import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp815Component } from './my-comp-815.component';

describe('MyComp815Component', () => {
  let component: MyComp815Component;
  let fixture: ComponentFixture<MyComp815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
