import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp781Component } from './my-comp-781.component';

describe('MyComp781Component', () => {
  let component: MyComp781Component;
  let fixture: ComponentFixture<MyComp781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
