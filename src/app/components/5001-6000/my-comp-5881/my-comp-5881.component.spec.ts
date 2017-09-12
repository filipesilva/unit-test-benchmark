import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5881Component } from './my-comp-5881.component';

describe('MyComp5881Component', () => {
  let component: MyComp5881Component;
  let fixture: ComponentFixture<MyComp5881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
