import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2825Component } from './my-comp-2825.component';

describe('MyComp2825Component', () => {
  let component: MyComp2825Component;
  let fixture: ComponentFixture<MyComp2825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
