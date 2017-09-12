import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3681Component } from './my-comp-3681.component';

describe('MyComp3681Component', () => {
  let component: MyComp3681Component;
  let fixture: ComponentFixture<MyComp3681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
