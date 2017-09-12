import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4629Component } from './my-comp-4629.component';

describe('MyComp4629Component', () => {
  let component: MyComp4629Component;
  let fixture: ComponentFixture<MyComp4629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
