import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp402Component } from './my-comp-402.component';

describe('MyComp402Component', () => {
  let component: MyComp402Component;
  let fixture: ComponentFixture<MyComp402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
