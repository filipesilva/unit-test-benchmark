import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp127Component } from './my-comp-127.component';

describe('MyComp127Component', () => {
  let component: MyComp127Component;
  let fixture: ComponentFixture<MyComp127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
