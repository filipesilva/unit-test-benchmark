import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5989Component } from './my-comp-5989.component';

describe('MyComp5989Component', () => {
  let component: MyComp5989Component;
  let fixture: ComponentFixture<MyComp5989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
