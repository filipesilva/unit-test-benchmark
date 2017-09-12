import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5684Component } from './my-comp-5684.component';

describe('MyComp5684Component', () => {
  let component: MyComp5684Component;
  let fixture: ComponentFixture<MyComp5684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
