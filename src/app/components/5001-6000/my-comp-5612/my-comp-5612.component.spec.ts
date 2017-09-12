import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5612Component } from './my-comp-5612.component';

describe('MyComp5612Component', () => {
  let component: MyComp5612Component;
  let fixture: ComponentFixture<MyComp5612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
