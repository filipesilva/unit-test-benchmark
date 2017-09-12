import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7000Component } from './my-comp-7000.component';

describe('MyComp7000Component', () => {
  let component: MyComp7000Component;
  let fixture: ComponentFixture<MyComp7000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
