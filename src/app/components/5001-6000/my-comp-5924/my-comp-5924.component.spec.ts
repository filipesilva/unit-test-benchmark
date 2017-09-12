import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5924Component } from './my-comp-5924.component';

describe('MyComp5924Component', () => {
  let component: MyComp5924Component;
  let fixture: ComponentFixture<MyComp5924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
