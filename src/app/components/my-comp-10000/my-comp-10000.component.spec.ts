import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp10000Component } from './my-comp-10000.component';

describe('MyComp10000Component', () => {
  let component: MyComp10000Component;
  let fixture: ComponentFixture<MyComp10000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp10000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp10000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
