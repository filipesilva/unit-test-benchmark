import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp942Component } from './my-comp-942.component';

describe('MyComp942Component', () => {
  let component: MyComp942Component;
  let fixture: ComponentFixture<MyComp942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
