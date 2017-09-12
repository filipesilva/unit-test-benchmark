import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5694Component } from './my-comp-5694.component';

describe('MyComp5694Component', () => {
  let component: MyComp5694Component;
  let fixture: ComponentFixture<MyComp5694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
