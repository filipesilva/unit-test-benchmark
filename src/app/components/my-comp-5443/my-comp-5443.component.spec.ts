import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5443Component } from './my-comp-5443.component';

describe('MyComp5443Component', () => {
  let component: MyComp5443Component;
  let fixture: ComponentFixture<MyComp5443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
