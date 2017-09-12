import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp548Component } from './my-comp-548.component';

describe('MyComp548Component', () => {
  let component: MyComp548Component;
  let fixture: ComponentFixture<MyComp548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
