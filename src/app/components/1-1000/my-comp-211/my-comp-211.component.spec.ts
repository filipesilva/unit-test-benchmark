import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp211Component } from './my-comp-211.component';

describe('MyComp211Component', () => {
  let component: MyComp211Component;
  let fixture: ComponentFixture<MyComp211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
