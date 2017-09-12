import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp752Component } from './my-comp-752.component';

describe('MyComp752Component', () => {
  let component: MyComp752Component;
  let fixture: ComponentFixture<MyComp752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
