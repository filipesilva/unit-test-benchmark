import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5602Component } from './my-comp-5602.component';

describe('MyComp5602Component', () => {
  let component: MyComp5602Component;
  let fixture: ComponentFixture<MyComp5602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
