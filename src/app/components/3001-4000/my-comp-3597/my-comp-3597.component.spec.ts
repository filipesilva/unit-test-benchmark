import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3597Component } from './my-comp-3597.component';

describe('MyComp3597Component', () => {
  let component: MyComp3597Component;
  let fixture: ComponentFixture<MyComp3597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
