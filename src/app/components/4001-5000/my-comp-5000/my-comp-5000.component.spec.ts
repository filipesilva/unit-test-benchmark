import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5000Component } from './my-comp-5000.component';

describe('MyComp5000Component', () => {
  let component: MyComp5000Component;
  let fixture: ComponentFixture<MyComp5000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
