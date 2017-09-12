import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp135Component } from './my-comp-135.component';

describe('MyComp135Component', () => {
  let component: MyComp135Component;
  let fixture: ComponentFixture<MyComp135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
