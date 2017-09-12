import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5625Component } from './my-comp-5625.component';

describe('MyComp5625Component', () => {
  let component: MyComp5625Component;
  let fixture: ComponentFixture<MyComp5625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
