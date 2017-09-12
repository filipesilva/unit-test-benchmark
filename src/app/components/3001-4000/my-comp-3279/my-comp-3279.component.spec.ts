import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3279Component } from './my-comp-3279.component';

describe('MyComp3279Component', () => {
  let component: MyComp3279Component;
  let fixture: ComponentFixture<MyComp3279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
