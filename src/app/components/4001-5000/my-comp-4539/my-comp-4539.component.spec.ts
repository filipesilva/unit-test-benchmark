import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4539Component } from './my-comp-4539.component';

describe('MyComp4539Component', () => {
  let component: MyComp4539Component;
  let fixture: ComponentFixture<MyComp4539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
