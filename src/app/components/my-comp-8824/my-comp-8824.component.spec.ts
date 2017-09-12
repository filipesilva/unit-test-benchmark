import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8824Component } from './my-comp-8824.component';

describe('MyComp8824Component', () => {
  let component: MyComp8824Component;
  let fixture: ComponentFixture<MyComp8824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
