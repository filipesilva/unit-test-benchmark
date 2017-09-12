import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp868Component } from './my-comp-868.component';

describe('MyComp868Component', () => {
  let component: MyComp868Component;
  let fixture: ComponentFixture<MyComp868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
