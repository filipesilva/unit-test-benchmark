import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2781Component } from './my-comp-2781.component';

describe('MyComp2781Component', () => {
  let component: MyComp2781Component;
  let fixture: ComponentFixture<MyComp2781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
