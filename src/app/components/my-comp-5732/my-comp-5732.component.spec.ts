import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5732Component } from './my-comp-5732.component';

describe('MyComp5732Component', () => {
  let component: MyComp5732Component;
  let fixture: ComponentFixture<MyComp5732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
