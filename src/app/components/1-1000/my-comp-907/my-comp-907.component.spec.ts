import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp907Component } from './my-comp-907.component';

describe('MyComp907Component', () => {
  let component: MyComp907Component;
  let fixture: ComponentFixture<MyComp907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
