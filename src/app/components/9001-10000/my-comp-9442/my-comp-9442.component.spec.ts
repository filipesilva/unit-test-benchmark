import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9442Component } from './my-comp-9442.component';

describe('MyComp9442Component', () => {
  let component: MyComp9442Component;
  let fixture: ComponentFixture<MyComp9442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
