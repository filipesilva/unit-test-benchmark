import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5617Component } from './my-comp-5617.component';

describe('MyComp5617Component', () => {
  let component: MyComp5617Component;
  let fixture: ComponentFixture<MyComp5617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
