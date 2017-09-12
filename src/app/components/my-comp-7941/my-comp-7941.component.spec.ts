import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7941Component } from './my-comp-7941.component';

describe('MyComp7941Component', () => {
  let component: MyComp7941Component;
  let fixture: ComponentFixture<MyComp7941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
