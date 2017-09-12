import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7192Component } from './my-comp-7192.component';

describe('MyComp7192Component', () => {
  let component: MyComp7192Component;
  let fixture: ComponentFixture<MyComp7192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
