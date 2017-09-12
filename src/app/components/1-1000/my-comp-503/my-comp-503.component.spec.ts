import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp503Component } from './my-comp-503.component';

describe('MyComp503Component', () => {
  let component: MyComp503Component;
  let fixture: ComponentFixture<MyComp503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
