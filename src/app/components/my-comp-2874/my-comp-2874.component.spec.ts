import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2874Component } from './my-comp-2874.component';

describe('MyComp2874Component', () => {
  let component: MyComp2874Component;
  let fixture: ComponentFixture<MyComp2874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
