import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1024Component } from './my-comp-1024.component';

describe('MyComp1024Component', () => {
  let component: MyComp1024Component;
  let fixture: ComponentFixture<MyComp1024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
