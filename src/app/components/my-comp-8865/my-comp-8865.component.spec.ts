import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8865Component } from './my-comp-8865.component';

describe('MyComp8865Component', () => {
  let component: MyComp8865Component;
  let fixture: ComponentFixture<MyComp8865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
