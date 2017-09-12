import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5364Component } from './my-comp-5364.component';

describe('MyComp5364Component', () => {
  let component: MyComp5364Component;
  let fixture: ComponentFixture<MyComp5364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
