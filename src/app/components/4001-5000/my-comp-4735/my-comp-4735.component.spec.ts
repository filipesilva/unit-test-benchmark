import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4735Component } from './my-comp-4735.component';

describe('MyComp4735Component', () => {
  let component: MyComp4735Component;
  let fixture: ComponentFixture<MyComp4735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
