import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4511Component } from './my-comp-4511.component';

describe('MyComp4511Component', () => {
  let component: MyComp4511Component;
  let fixture: ComponentFixture<MyComp4511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
