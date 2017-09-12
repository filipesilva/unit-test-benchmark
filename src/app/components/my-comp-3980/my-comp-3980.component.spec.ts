import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3980Component } from './my-comp-3980.component';

describe('MyComp3980Component', () => {
  let component: MyComp3980Component;
  let fixture: ComponentFixture<MyComp3980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
