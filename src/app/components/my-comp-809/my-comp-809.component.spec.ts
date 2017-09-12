import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp809Component } from './my-comp-809.component';

describe('MyComp809Component', () => {
  let component: MyComp809Component;
  let fixture: ComponentFixture<MyComp809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
