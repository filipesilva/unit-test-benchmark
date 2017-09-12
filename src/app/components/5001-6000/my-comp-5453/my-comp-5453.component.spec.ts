import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5453Component } from './my-comp-5453.component';

describe('MyComp5453Component', () => {
  let component: MyComp5453Component;
  let fixture: ComponentFixture<MyComp5453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
