import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp703Component } from './my-comp-703.component';

describe('MyComp703Component', () => {
  let component: MyComp703Component;
  let fixture: ComponentFixture<MyComp703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
