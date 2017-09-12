import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3045Component } from './my-comp-3045.component';

describe('MyComp3045Component', () => {
  let component: MyComp3045Component;
  let fixture: ComponentFixture<MyComp3045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
