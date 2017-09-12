import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7732Component } from './my-comp-7732.component';

describe('MyComp7732Component', () => {
  let component: MyComp7732Component;
  let fixture: ComponentFixture<MyComp7732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
