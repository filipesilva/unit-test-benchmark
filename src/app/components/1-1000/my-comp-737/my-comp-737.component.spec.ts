import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp737Component } from './my-comp-737.component';

describe('MyComp737Component', () => {
  let component: MyComp737Component;
  let fixture: ComponentFixture<MyComp737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
