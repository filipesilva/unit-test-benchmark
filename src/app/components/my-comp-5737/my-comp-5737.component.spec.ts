import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5737Component } from './my-comp-5737.component';

describe('MyComp5737Component', () => {
  let component: MyComp5737Component;
  let fixture: ComponentFixture<MyComp5737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
