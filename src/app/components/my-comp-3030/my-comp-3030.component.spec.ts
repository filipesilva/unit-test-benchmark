import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3030Component } from './my-comp-3030.component';

describe('MyComp3030Component', () => {
  let component: MyComp3030Component;
  let fixture: ComponentFixture<MyComp3030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
