import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3025Component } from './my-comp-3025.component';

describe('MyComp3025Component', () => {
  let component: MyComp3025Component;
  let fixture: ComponentFixture<MyComp3025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
