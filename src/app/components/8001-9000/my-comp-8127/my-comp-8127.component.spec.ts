import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8127Component } from './my-comp-8127.component';

describe('MyComp8127Component', () => {
  let component: MyComp8127Component;
  let fixture: ComponentFixture<MyComp8127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
