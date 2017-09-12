import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3441Component } from './my-comp-3441.component';

describe('MyComp3441Component', () => {
  let component: MyComp3441Component;
  let fixture: ComponentFixture<MyComp3441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
