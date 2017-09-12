import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp602Component } from './my-comp-602.component';

describe('MyComp602Component', () => {
  let component: MyComp602Component;
  let fixture: ComponentFixture<MyComp602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
