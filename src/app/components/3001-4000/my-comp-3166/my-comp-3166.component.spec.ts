import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3166Component } from './my-comp-3166.component';

describe('MyComp3166Component', () => {
  let component: MyComp3166Component;
  let fixture: ComponentFixture<MyComp3166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
