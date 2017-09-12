import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5629Component } from './my-comp-5629.component';

describe('MyComp5629Component', () => {
  let component: MyComp5629Component;
  let fixture: ComponentFixture<MyComp5629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
