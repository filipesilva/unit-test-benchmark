import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4531Component } from './my-comp-4531.component';

describe('MyComp4531Component', () => {
  let component: MyComp4531Component;
  let fixture: ComponentFixture<MyComp4531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
