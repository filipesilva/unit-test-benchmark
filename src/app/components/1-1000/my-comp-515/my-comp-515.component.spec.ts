import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp515Component } from './my-comp-515.component';

describe('MyComp515Component', () => {
  let component: MyComp515Component;
  let fixture: ComponentFixture<MyComp515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
