import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp550Component } from './my-comp-550.component';

describe('MyComp550Component', () => {
  let component: MyComp550Component;
  let fixture: ComponentFixture<MyComp550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
