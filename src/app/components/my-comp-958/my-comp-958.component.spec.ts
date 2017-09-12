import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp958Component } from './my-comp-958.component';

describe('MyComp958Component', () => {
  let component: MyComp958Component;
  let fixture: ComponentFixture<MyComp958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
