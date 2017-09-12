import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4448Component } from './my-comp-4448.component';

describe('MyComp4448Component', () => {
  let component: MyComp4448Component;
  let fixture: ComponentFixture<MyComp4448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
