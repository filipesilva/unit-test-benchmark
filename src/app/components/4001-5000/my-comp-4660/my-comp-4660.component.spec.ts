import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4660Component } from './my-comp-4660.component';

describe('MyComp4660Component', () => {
  let component: MyComp4660Component;
  let fixture: ComponentFixture<MyComp4660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
