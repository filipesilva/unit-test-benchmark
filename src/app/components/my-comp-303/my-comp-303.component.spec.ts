import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp303Component } from './my-comp-303.component';

describe('MyComp303Component', () => {
  let component: MyComp303Component;
  let fixture: ComponentFixture<MyComp303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
