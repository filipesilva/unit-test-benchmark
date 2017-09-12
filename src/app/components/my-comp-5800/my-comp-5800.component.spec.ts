import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5800Component } from './my-comp-5800.component';

describe('MyComp5800Component', () => {
  let component: MyComp5800Component;
  let fixture: ComponentFixture<MyComp5800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
