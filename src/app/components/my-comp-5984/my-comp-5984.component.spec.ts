import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5984Component } from './my-comp-5984.component';

describe('MyComp5984Component', () => {
  let component: MyComp5984Component;
  let fixture: ComponentFixture<MyComp5984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
