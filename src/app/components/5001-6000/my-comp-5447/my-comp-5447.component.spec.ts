import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5447Component } from './my-comp-5447.component';

describe('MyComp5447Component', () => {
  let component: MyComp5447Component;
  let fixture: ComponentFixture<MyComp5447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
