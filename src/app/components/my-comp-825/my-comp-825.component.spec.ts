import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp825Component } from './my-comp-825.component';

describe('MyComp825Component', () => {
  let component: MyComp825Component;
  let fixture: ComponentFixture<MyComp825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
