import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4347Component } from './my-comp-4347.component';

describe('MyComp4347Component', () => {
  let component: MyComp4347Component;
  let fixture: ComponentFixture<MyComp4347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
