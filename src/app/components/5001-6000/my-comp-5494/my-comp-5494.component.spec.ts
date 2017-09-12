import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5494Component } from './my-comp-5494.component';

describe('MyComp5494Component', () => {
  let component: MyComp5494Component;
  let fixture: ComponentFixture<MyComp5494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
