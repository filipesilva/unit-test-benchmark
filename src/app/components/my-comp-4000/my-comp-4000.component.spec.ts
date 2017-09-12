import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4000Component } from './my-comp-4000.component';

describe('MyComp4000Component', () => {
  let component: MyComp4000Component;
  let fixture: ComponentFixture<MyComp4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
