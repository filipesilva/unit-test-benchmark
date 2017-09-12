import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3968Component } from './my-comp-3968.component';

describe('MyComp3968Component', () => {
  let component: MyComp3968Component;
  let fixture: ComponentFixture<MyComp3968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
