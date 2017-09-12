import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5701Component } from './my-comp-5701.component';

describe('MyComp5701Component', () => {
  let component: MyComp5701Component;
  let fixture: ComponentFixture<MyComp5701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
