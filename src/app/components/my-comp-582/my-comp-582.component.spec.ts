import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp582Component } from './my-comp-582.component';

describe('MyComp582Component', () => {
  let component: MyComp582Component;
  let fixture: ComponentFixture<MyComp582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
