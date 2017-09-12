import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2885Component } from './my-comp-2885.component';

describe('MyComp2885Component', () => {
  let component: MyComp2885Component;
  let fixture: ComponentFixture<MyComp2885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
