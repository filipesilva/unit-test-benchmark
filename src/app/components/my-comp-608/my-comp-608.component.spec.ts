import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp608Component } from './my-comp-608.component';

describe('MyComp608Component', () => {
  let component: MyComp608Component;
  let fixture: ComponentFixture<MyComp608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
