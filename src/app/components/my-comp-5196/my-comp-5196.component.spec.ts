import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5196Component } from './my-comp-5196.component';

describe('MyComp5196Component', () => {
  let component: MyComp5196Component;
  let fixture: ComponentFixture<MyComp5196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
