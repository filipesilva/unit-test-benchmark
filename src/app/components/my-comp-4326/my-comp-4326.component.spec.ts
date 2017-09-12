import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4326Component } from './my-comp-4326.component';

describe('MyComp4326Component', () => {
  let component: MyComp4326Component;
  let fixture: ComponentFixture<MyComp4326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
