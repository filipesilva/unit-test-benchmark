import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4207Component } from './my-comp-4207.component';

describe('MyComp4207Component', () => {
  let component: MyComp4207Component;
  let fixture: ComponentFixture<MyComp4207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
