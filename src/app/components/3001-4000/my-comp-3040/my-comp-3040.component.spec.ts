import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3040Component } from './my-comp-3040.component';

describe('MyComp3040Component', () => {
  let component: MyComp3040Component;
  let fixture: ComponentFixture<MyComp3040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
