import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9907Component } from './my-comp-9907.component';

describe('MyComp9907Component', () => {
  let component: MyComp9907Component;
  let fixture: ComponentFixture<MyComp9907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
