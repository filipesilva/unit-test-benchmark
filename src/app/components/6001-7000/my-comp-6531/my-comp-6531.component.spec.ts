import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6531Component } from './my-comp-6531.component';

describe('MyComp6531Component', () => {
  let component: MyComp6531Component;
  let fixture: ComponentFixture<MyComp6531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
