import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp375Component } from './my-comp-375.component';

describe('MyComp375Component', () => {
  let component: MyComp375Component;
  let fixture: ComponentFixture<MyComp375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
