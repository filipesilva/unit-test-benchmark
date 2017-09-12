import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5428Component } from './my-comp-5428.component';

describe('MyComp5428Component', () => {
  let component: MyComp5428Component;
  let fixture: ComponentFixture<MyComp5428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
