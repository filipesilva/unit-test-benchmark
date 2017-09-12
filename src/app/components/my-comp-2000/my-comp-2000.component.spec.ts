import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2000Component } from './my-comp-2000.component';

describe('MyComp2000Component', () => {
  let component: MyComp2000Component;
  let fixture: ComponentFixture<MyComp2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
