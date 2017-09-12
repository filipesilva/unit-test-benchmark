import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3093Component } from './my-comp-3093.component';

describe('MyComp3093Component', () => {
  let component: MyComp3093Component;
  let fixture: ComponentFixture<MyComp3093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
