import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3982Component } from './my-comp-3982.component';

describe('MyComp3982Component', () => {
  let component: MyComp3982Component;
  let fixture: ComponentFixture<MyComp3982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
