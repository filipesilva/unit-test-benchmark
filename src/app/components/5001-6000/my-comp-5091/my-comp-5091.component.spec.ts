import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5091Component } from './my-comp-5091.component';

describe('MyComp5091Component', () => {
  let component: MyComp5091Component;
  let fixture: ComponentFixture<MyComp5091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
