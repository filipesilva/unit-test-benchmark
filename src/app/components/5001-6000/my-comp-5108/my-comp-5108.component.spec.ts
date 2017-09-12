import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5108Component } from './my-comp-5108.component';

describe('MyComp5108Component', () => {
  let component: MyComp5108Component;
  let fixture: ComponentFixture<MyComp5108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
