import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4428Component } from './my-comp-4428.component';

describe('MyComp4428Component', () => {
  let component: MyComp4428Component;
  let fixture: ComponentFixture<MyComp4428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
