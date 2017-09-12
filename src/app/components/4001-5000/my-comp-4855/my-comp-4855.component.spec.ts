import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4855Component } from './my-comp-4855.component';

describe('MyComp4855Component', () => {
  let component: MyComp4855Component;
  let fixture: ComponentFixture<MyComp4855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
