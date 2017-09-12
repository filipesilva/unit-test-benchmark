import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4781Component } from './my-comp-4781.component';

describe('MyComp4781Component', () => {
  let component: MyComp4781Component;
  let fixture: ComponentFixture<MyComp4781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
