import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp133Component } from './my-comp-133.component';

describe('MyComp133Component', () => {
  let component: MyComp133Component;
  let fixture: ComponentFixture<MyComp133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
