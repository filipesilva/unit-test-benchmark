import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5036Component } from './my-comp-5036.component';

describe('MyComp5036Component', () => {
  let component: MyComp5036Component;
  let fixture: ComponentFixture<MyComp5036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
