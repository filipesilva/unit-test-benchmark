import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp878Component } from './my-comp-878.component';

describe('MyComp878Component', () => {
  let component: MyComp878Component;
  let fixture: ComponentFixture<MyComp878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
