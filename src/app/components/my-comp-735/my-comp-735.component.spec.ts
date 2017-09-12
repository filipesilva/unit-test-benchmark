import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp735Component } from './my-comp-735.component';

describe('MyComp735Component', () => {
  let component: MyComp735Component;
  let fixture: ComponentFixture<MyComp735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
