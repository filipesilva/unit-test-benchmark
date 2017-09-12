import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4348Component } from './my-comp-4348.component';

describe('MyComp4348Component', () => {
  let component: MyComp4348Component;
  let fixture: ComponentFixture<MyComp4348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
