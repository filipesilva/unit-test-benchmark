import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5958Component } from './my-comp-5958.component';

describe('MyComp5958Component', () => {
  let component: MyComp5958Component;
  let fixture: ComponentFixture<MyComp5958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
