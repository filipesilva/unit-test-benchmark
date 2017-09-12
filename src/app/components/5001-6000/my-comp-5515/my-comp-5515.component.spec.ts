import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5515Component } from './my-comp-5515.component';

describe('MyComp5515Component', () => {
  let component: MyComp5515Component;
  let fixture: ComponentFixture<MyComp5515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
