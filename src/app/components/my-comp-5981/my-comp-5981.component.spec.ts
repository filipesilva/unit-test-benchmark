import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5981Component } from './my-comp-5981.component';

describe('MyComp5981Component', () => {
  let component: MyComp5981Component;
  let fixture: ComponentFixture<MyComp5981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
