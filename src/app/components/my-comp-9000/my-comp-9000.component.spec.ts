import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9000Component } from './my-comp-9000.component';

describe('MyComp9000Component', () => {
  let component: MyComp9000Component;
  let fixture: ComponentFixture<MyComp9000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
