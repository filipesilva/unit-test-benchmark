import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4907Component } from './my-comp-4907.component';

describe('MyComp4907Component', () => {
  let component: MyComp4907Component;
  let fixture: ComponentFixture<MyComp4907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
