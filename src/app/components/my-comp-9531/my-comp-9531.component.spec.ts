import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9531Component } from './my-comp-9531.component';

describe('MyComp9531Component', () => {
  let component: MyComp9531Component;
  let fixture: ComponentFixture<MyComp9531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
