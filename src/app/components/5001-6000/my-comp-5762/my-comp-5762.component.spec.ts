import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5762Component } from './my-comp-5762.component';

describe('MyComp5762Component', () => {
  let component: MyComp5762Component;
  let fixture: ComponentFixture<MyComp5762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
