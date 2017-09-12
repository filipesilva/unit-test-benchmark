import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5688Component } from './my-comp-5688.component';

describe('MyComp5688Component', () => {
  let component: MyComp5688Component;
  let fixture: ComponentFixture<MyComp5688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
