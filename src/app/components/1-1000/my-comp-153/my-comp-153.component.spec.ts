import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp153Component } from './my-comp-153.component';

describe('MyComp153Component', () => {
  let component: MyComp153Component;
  let fixture: ComponentFixture<MyComp153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
