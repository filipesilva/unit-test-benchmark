import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4149Component } from './my-comp-4149.component';

describe('MyComp4149Component', () => {
  let component: MyComp4149Component;
  let fixture: ComponentFixture<MyComp4149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
