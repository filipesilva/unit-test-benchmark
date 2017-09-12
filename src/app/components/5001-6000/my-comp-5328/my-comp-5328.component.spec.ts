import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5328Component } from './my-comp-5328.component';

describe('MyComp5328Component', () => {
  let component: MyComp5328Component;
  let fixture: ComponentFixture<MyComp5328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
