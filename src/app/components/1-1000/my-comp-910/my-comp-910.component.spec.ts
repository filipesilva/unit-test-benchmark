import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp910Component } from './my-comp-910.component';

describe('MyComp910Component', () => {
  let component: MyComp910Component;
  let fixture: ComponentFixture<MyComp910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
