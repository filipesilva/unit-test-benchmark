import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1000Component } from './my-comp-1000.component';

describe('MyComp1000Component', () => {
  let component: MyComp1000Component;
  let fixture: ComponentFixture<MyComp1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
