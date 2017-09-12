import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4825Component } from './my-comp-4825.component';

describe('MyComp4825Component', () => {
  let component: MyComp4825Component;
  let fixture: ComponentFixture<MyComp4825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
