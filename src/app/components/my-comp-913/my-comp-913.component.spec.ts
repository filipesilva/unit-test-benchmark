import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp913Component } from './my-comp-913.component';

describe('MyComp913Component', () => {
  let component: MyComp913Component;
  let fixture: ComponentFixture<MyComp913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
