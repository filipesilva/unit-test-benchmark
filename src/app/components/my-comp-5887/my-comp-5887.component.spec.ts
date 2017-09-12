import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5887Component } from './my-comp-5887.component';

describe('MyComp5887Component', () => {
  let component: MyComp5887Component;
  let fixture: ComponentFixture<MyComp5887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
