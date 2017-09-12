import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp490Component } from './my-comp-490.component';

describe('MyComp490Component', () => {
  let component: MyComp490Component;
  let fixture: ComponentFixture<MyComp490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
