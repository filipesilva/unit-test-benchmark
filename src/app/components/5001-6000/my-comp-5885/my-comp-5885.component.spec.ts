import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5885Component } from './my-comp-5885.component';

describe('MyComp5885Component', () => {
  let component: MyComp5885Component;
  let fixture: ComponentFixture<MyComp5885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
