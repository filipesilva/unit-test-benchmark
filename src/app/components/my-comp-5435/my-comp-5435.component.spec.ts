import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5435Component } from './my-comp-5435.component';

describe('MyComp5435Component', () => {
  let component: MyComp5435Component;
  let fixture: ComponentFixture<MyComp5435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
