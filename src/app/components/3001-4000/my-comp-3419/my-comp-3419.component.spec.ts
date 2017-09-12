import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3419Component } from './my-comp-3419.component';

describe('MyComp3419Component', () => {
  let component: MyComp3419Component;
  let fixture: ComponentFixture<MyComp3419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
