import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9660Component } from './my-comp-9660.component';

describe('MyComp9660Component', () => {
  let component: MyComp9660Component;
  let fixture: ComponentFixture<MyComp9660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
